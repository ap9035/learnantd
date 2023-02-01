import './Connection.css';
import {Form, Select, Input, Button, Space, Card} from 'antd';
const { TextArea } = Input;

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const ipOptions = [
    {
        label: 'tirhmmb01',
        value: 'tirhmmb01'
    },
    {
        label: 'tirhmmb02',
        value: 'tirhmmb02'
    }
];

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

const groupOptions = [
    {
        label: 'MMB_UAT_AP',
        value: 'MMB_UAT_AP'
    },
    {
        label: 'MMB_PROD_AP',
        value: 'MMB_PROD_AP'
    },
    {
        label: 'MMB_UAT_WEN',
        value: 'MMB_UAT_AP'
    }
];

function Connection() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Card title="Connection" style={{ width: 600 }}>
            <Form
                form={form}
                name="connection"
                style={{
                    maxWidth: 600,
                }}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Source IP"
                    name="sourceIp"
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
                        placeholder="Please select"
                        options={ipOptions}
                    />
                </Form.Item>

                <Form.Item
                    label="Dest IP"
                    name="destIp"
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
                        placeholder="Please select"
                        options={ipOptions}
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

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Space>    </Space>
                    <Button htmlType="button">
                        Reset
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    );
}

export default Connection;
