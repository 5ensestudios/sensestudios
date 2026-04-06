import ThreadsImg from './threads icon.webp';

const ThreadsIcon = ({ size = 24, color = "white" }) => (
  <img 
    src={ThreadsImg} 
    alt="Threads" 
    style={{ width: size, height: size }}
  />
);

export default ThreadsIcon;
