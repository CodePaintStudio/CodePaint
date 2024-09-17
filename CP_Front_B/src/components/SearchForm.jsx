import {Button, Col, DatePicker, Form, Input, Row, Select} from 'antd';

const {Option} = Select;

export default function SearchForm({onFinish}) {

    const typeListData = [
        {
            value: 'all',
            label: '全部',
        },
        {
            value: 'ui',
            label: "UI作品"
        },
        {
            value: 'frontend',
            label: "前端博客"
        },
        {
            value: 'activities',
            label: "活动"
        }
    ];

    let typeList
    typeListData ?
        typeList = typeListData.map(item => {
            return <Option key={item.value} value={item.value}>{item.label}</Option>
        })
        :
        typeList = []

    return (
        <Form
            style={{
                fontWeight: "bold",
                borderBottom: "1px solid rgb(217, 217, 217)",
                padding: 24,
                paddingBottom: 0
            }}
            labelAlign="right"
            onFinish={onFinish}
            autoComplete="off"
        >
            <Row>
                <Col
                    span={8}
                >
                    <Form.Item
                        labelCol={{span: 4}}
                        label="作品名称"
                        name="title"
                    >
                        <Input
                            placeholder={"请输入作品名称"}
                        />
                    </Form.Item>
                </Col>
                <Col
                    span={8}
                    push={1}
                >
                    <Form.Item
                        labelCol={{span: 4}}
                        label="发布时间"
                        name="publishTime"
                    >
                        <DatePicker
                            style={{width: "100%"}}
                            format={"YYYY-MM-DD"}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col
                    span={8}
                >
                    <Form.Item
                        labelCol={{span: 4}}
                        label="作者"
                        name="author"
                    >
                        <Input
                            placeholder={"请输入作者"}
                        />
                    </Form.Item>
                </Col>
                <Col
                    span={8}
                    push={1}
                >
                    <Form.Item
                        labelCol={{span: 4}}
                        label="类型"
                        name="type"
                    >
                        <Select
                            placeholder={"请选择查询类型"}
                        >
                            {typeList}
                        </Select>
                    </Form.Item>
                </Col>
                <Col
                    span={8}
                    push={2}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            padding: "0 3vh"
                        }}
                    >
                        查询
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
