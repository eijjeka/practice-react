import { Timer } from "./components/timer/timer";
import { ClassPosts } from "./components/posts/ClassPosts";
import { Form } from "./components/form/Form";
import Hw from "./components/form/HwForm";
import { FormWithRef } from "./components/form/FormWithRef";

export const App = () => {
  return (
    <>
      <Timer />
      <ClassPosts />
      <Form />
      <Hw />
      <FormWithRef />
    </>
  );
};
