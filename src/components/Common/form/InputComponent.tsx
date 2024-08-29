import { Form } from "antd";
import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const InputComponent = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item
            label={<span style={{ color: 'black' }}>{label}</span>}
          >
            <Input required {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default InputComponent;
