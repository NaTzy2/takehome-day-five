import "./css/master.css";
import ButtonTbDel from "../components/button/ButtonTbDel";

import axios from "axios";

import React, { useState, useEffect } from "react";
import { Table, Modal, Form, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Column } = Table;

const MasterDataPage = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = async () => {
    const response = await axios.get(
      "http://localhost:3004/books?_page=1&_limit=10"
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const onFinish = (values) => {
    console.log("success:", values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("failed", errorInfo);
  };
  
  const handleOk = (values) => {
    setIsModalOpen(values === '' ? onFinishFailed() : onFinish());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <div className="wrap-master">
        <div className="flex-master">
          <h3 className="title-master">Master Data</h3>
          <button className="btn-add" onClick={showModal}>
            <PlusCircleOutlined /> Add Book
          </button>
          <Modal
            title="Add Book"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input the title!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Cover"
                name="cover"
                rules={[{ required: true, message: "Please input the cover url!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Genre"
                name="genre"
                rules={[{ required: true, message: "Please input the genre!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Author"
                name="author"
                rules={[{ required: true, message: "Please input the author!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Desc"
                name="desc"
                rules={[{ required: true, message: "Please input the desc!" }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <Table dataSource={data}>
          <Column title="Title" dataIndex="title" key="title" />
          <Column title="Genre" dataIndex="genre" key="genre" />
          <Column title="Author" dataIndex="author" key="author" />
          <Column title="Desc" dataIndex="desc" key="desc" ellipsis={true} />
          <Column
            width={100}
            title="Action"
            key="action"
            render={(record) => (
              <>
                <ButtonTbDel />
              </>
            )}
          />
        </Table>
      </div>
    </main>
  );
};

export default MasterDataPage;
