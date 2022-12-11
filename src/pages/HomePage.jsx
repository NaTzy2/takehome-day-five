import React from "react";

import "./css/index.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Text } = Typography;

const HomePage = () => {
  const [buku, setBuku] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const getDataBuku = async (page) => {
    const response = await axios.get(
      `http://localhost:3004/books?_page=${page}&_limit=3`
    );
    setBuku(response.data);
  };

  useEffect(() => {
    getDataBuku(count);
  }, [count]);

  const detailNav = (buku) => {
    navigate(`detail/${buku.id}`, {
      replace: true,
      state: { bk: buku },
    });
  };

  const prev = () => {
    setCount(count - 1);
  };

  const next = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <h2 className="home-title">Books Store</h2>
      <div className="wrap">
        <div className="grid">
          {buku.map((buku) => (
            <Card
              hoverable
              className="card"
              cover={
                <img title={buku.title} src={buku.cover} className="card-img" />
              }
              key={buku.id}
            >
              <Meta
                className="card-body"
                title={<Text className="card-title">{buku.title}</Text>}
                description={<Text className="card-desc" ellipsis={true}>{buku.desc}</Text>}
                ellipsis={true}
              />
              <button
                className="btn"
                onClick={() => {
                  detailNav(buku);
                }}
              >
                See More
              </button>
            </Card>
          ))}
        </div>
        <div className="pagination">
          {count <= 1 ? (
            <button disabled>
              <ArrowLeftOutlined />
            </button>
          ) : (
            <button className="btn-prev" onClick={prev}>
              <ArrowLeftOutlined />
            </button>
          )}

          {count >= buku.length ? (
            <button disabled>
              <ArrowRightOutlined />
            </button>
          ) : (
            <button className="btn-next" onClick={next}>
              <ArrowRightOutlined />
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
