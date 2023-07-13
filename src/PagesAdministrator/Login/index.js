import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  notification,
} from "antd";
import "./index.css";
import { DownOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { GlobalOutlined } from "@ant-design/icons";
import { withTranslation, useTranslation } from "react-i18next";
import { asyncLoginRequestAction } from "./stores/action";
const LoginComponent = (props) => {
  const { i18n } = useTranslation();
  const { t } = props;
  const { loginRequestDispatch } = props;
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    loginRequestDispatch();
  });

  const navigate = useNavigate();
  const onFinish = async (values) => {
   // const res = await props.loginRequestDispatch(values);

    //if (res) {
      if (values.username=="admin" && values.password=="admin") {
      notification.open({
        message: "Đăng nhập",
        description: "Đăng nhập thành công",
        icon: <DownOutlined style={{ color: "green" }} />,
      });
      navigate("/administrator/users");
     localStorage.setItem("token", values.username);
     localStorage.setItem("user", values.username);
    } else {
      notification.open({
        message: "Đăng nhập",
        description: "Đăng nhập Thất bại",
        icon: <CloseOutlined style={{ color: "red" }} />,
      });
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancelButton = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        margin: "auto",
        height: 800,
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f2f5",
          margin: "auto",
          width: 600,
        }}
      >
        <div onClick={showModal} className="userContainer">
          <GlobalOutlined />
        </div>{" "}
        <br></br>
        <div
          style={{
            backgroundColor: "#f0f2f5",
            margin: "auto",
          }}
        >
          <h2 className="">Estella Heights </h2>
          <p>Estella Heights - A class beyond</p>
        </div>
        <p
          style={{
            // textDecoration: "underline",
            margin: "auto",
            padding: "auto",
            color: "blue",
          }}
        >
          {i18n.t("Authenticate")}
        </p>
        <br></br>
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // autoComplete="off"
        >
          <Form.Item
            label={i18n.t("Username")}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={i18n.t("Password")}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>{i18n.t("Remember")}</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {i18n.t("Login")}
            </Button>
          </Form.Item>
        </Form>
        <Modal
          visible={isModalVisible}
          footer={null}
          closable={false}
          maskStyle={{ backgroundColor: "transparent" }}
          maskClosable={true}
          onCancel={handleCancelButton}
          width="200px"
          bodyStyle={{ padding: 0 }}
          style={{
            top: "64px",
            margin: "0 0 0 auto",
            paddingRight: "10px",
          }}
        >
          <div style={{ cursor: "pointer" }}>
            <div className="div">
              <Button onClick={() => changeLanguage("en")}>en Tiếng anh</Button>
            </div>
          </div>
          <div style={{ cursor: "pointer" }}>
            <div className="div">
              <Button onClick={() => changeLanguage("vi")}>
                vi Tiếng Việt
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  loginRequestDispatch: (payload) => asyncLoginRequestAction(dispatch)(payload),
});
const Login = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);
export default Login;
