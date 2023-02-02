import './App.css';
import {Form, Select, Input, Button, Space, Card} from 'antd';
import React from "react";
const { TextArea } = Input;

const tailLayout = {
    wrapperCol: { offset: 10, span: 14 },
};

let resourcesOpts = [];

const ips = [
    {
        label: 'tirhmmb01',
        value: 'tirhmmb01'
    },
    {
        label: 'tirhmmb02',
        value: 'tirhmmb02'
    }
];

const groups = [
    {
        label: 'MMB_UAT_AP',
        value: 'MMB_UAT_AP'
    },
    {
        label: 'MMB_PROD_AP',
        value: 'MMB_PROD_AP'
    },
    {
        label: 'MMB_UT_AP',
        value: 'MMB_UT_AP'
    }
];

resourcesOpts = resourcesOpts.concat(groups, ips)

const portOptions = [
    {
        label: '443',
        value: '443'
    },
    {
        label: '80',
        value: '80'
    }
];

function Connection() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        // Submit to backend here
        console.log(values);
    };

    const genExcel = (values) => {
        // Generate Excel file here
        console.log(form.getFieldValue());
    }

    return (
        <Card title="Connection">
            <Form
                form={form}
                name="connection"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Source IP / Group"
                    name="source"
                    rules={[
                        {
                            required: true,
                            message: 'Please input source ip!',
                        },
                    ]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        options={resourcesOpts}
                    />
                </Form.Item>

                <Form.Item
                    label="Dest IP / Group"
                    name="dest"
                    rules={[
                        {
                            required: true,
                            message: 'Please input dest ip!',
                        },
                    ]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        options={resourcesOpts}
                    />
                </Form.Item>

                <Form.Item
                    label="Port Number"
                    name="portNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input port number!',
                        },
                    ]}
                >
                    <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Port number"
                        options={portOptions}
                    />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Description!',
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    label="Ticket Number"
                    name="ticketNumber"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        placeholder="Ticket Number"
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button htmlType="button" onClick={genExcel}>
                        Generate Excel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button">
                        Reset
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    );
}

export default Connection;
