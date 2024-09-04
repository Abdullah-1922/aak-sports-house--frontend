/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form } from "antd";
import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  defaultValue?:string
};

const InputComponent = ({ type, name, label ,defaultValue=''}: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item  label={<span style={{ color: "black" ,fontSize:'20px', }}>{label}</span>}>
            <Input defaultValue={defaultValue} size="large" className="py-3" required {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default InputComponent;
