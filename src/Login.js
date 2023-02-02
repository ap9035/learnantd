import {Form, Select, Input, Button, Space, Card} from 'antd';
import React from 'react';

function MyLogin(){
    const [form] = Form.useForm();
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const cardStyle = {
        width: "400px"
    }
    const onFinish = (values) => {
        // fetch login here
        // then.. redirect to history(-1)
        console.log(values);
    };
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return <Card
        title={"Login"}
        style={cardStyle}
    >
        <Form
            form={form}
            name="connection"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 15,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="User Name"
                name="userName"
                rules={[
                    {
                        required: true,
                        message: 'User Name!',
                    },
                ]}
            >
                <Input
                    placeholder="User Name"
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password',
                    },
                ]}
            >
                <Input.Password
                    placeholder="Password"
                    visibilityToggle={{
                        visible: passwordVisible,
                        onVisibleChange: setPasswordVisible,
                    }}
                />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Space>    </Space>
                <Button htmlType="button">
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    </Card>
}

export default MyLogin;