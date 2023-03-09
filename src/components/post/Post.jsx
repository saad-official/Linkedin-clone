import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Post.css";
import InputOption from "../inputOption/InputOption";
import { forwardRef } from "react";
const Post =  forwardRef(({ name, description, message, messageImg, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl} style={{backgroundColor:"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
       {message}
      </div>

      {messageImg &&
        <div className="post__img">
          <img src={messageImg} width="100%" height="100%" style={{ objectFit: "contain" }} alt="" />
        </div>
      }
      <div className="post__button">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
