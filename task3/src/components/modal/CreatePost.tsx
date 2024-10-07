import { Input, Modal, Button } from "antd";
import React, { useImperativeHandle, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const { TextArea } = Input;

const schema = yup.object().shape({
  userId: yup.number().required("UserId is required"),
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required"),
});

const CreatePost = React.forwardRef((_props, ref) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleClose,
    handleOpen,
  }));

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IDataCreatePost) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log("Post created:", response.data);
      handleClose();
      toast.success("Post created successfully");
      reset();
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      onCancel={handleClose}
      title="Create Post"
      open={open}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button
          loading={loading}
          key="submit"
          type="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>,
      ]}
    >
      <form className="form-create-post" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="userId"
            control={control}
            render={({ field }) => <Input {...field} placeholder="userId" />}
          />
          {errors.userId && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.userId.message}
            </span>
          )}
        </div>
        <div>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextArea {...field} rows={2} placeholder="title" />
            )}
          />
          {errors.title && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.title.message}
            </span>
          )}
        </div>
        <div>
          <Controller
            name="body"
            control={control}
            render={({ field }) => (
              <TextArea {...field} rows={4} placeholder="body" />
            )}
          />
          {errors.body && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.body.message}
            </span>
          )}
        </div>
      </form>
    </Modal>
  );
});

export default CreatePost;
