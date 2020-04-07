import * as React from "react";

import { Form, DatePicker, Select, Button } from "antd";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }]
};
const rangeConfig = {
  rules: [{ type: "array", required: true, message: "Please select time!" }]
};

// interface ISample {
//   rangeValue: Array<date>
// }

interface DateArrayType {
  id: number;
  year: string;
}

const TimeRelatedForm = () => {
  const onFinish = (fieldsValue: {
    [x: string]: { format: (arg0: string) => void };
  }) => {
    // Should format date value before submit.
    const rangeValue: any = fieldsValue["range-picker"];
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "range-picker": [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD")
      ]
    };
    console.log("Received values of form: ", values);
  };
  return (
    <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
      <Form.Item name="date-picker" label="DatePicker" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
        <RangePicker />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 }
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TimeRelatedForm;
