import { FaDiscord, FaGithub, FaYoutube, FaTwitch } from 'react-icons/fa';

const Buttons = () => {
  return (
    <div classname="bgcolor">
      <div className="flex justify-center flex-row">
          <div><LinkIcon icon={<FaGithub size="52"/>} link="https://github.com/underscorelior" style="github-icon links-icon"/></div>
          <div><LinkIcon icon={<FaDiscord size="48"/>} link="https://discord.gg/AZKDdeFQE3" style="discord-icon links-icon"/></div>
          <div><LinkIcon icon={<FaTwitch size="48"/>} link="https://twitch.tv/underscorelior" style="twitch-icon links-icon"/></div>
          <div><LinkIcon icon={<FaYoutube size="48" />} link="https://youtube.com/underscorelior" style="yt-icon links-icon"/></div>
      </div>
    </div>
  );
};

const LinkIcon = ({ icon, link, style }) => (
  <div className={style}>
    <a href={link}>
    {icon}
    </a>
  </div>
);
export default Buttons;
