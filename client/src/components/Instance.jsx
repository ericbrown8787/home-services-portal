import defaultAdminLogo from "../assets/setting-icon.svg";
const Instance = ({ instance }) => {
  if (instance.notInteractive) {
    return (
      <li>
        <div>
          <p>{instance.label}</p>
          {instance.url}
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <a href={instance.url}>
          <img src={defaultAdminLogo} />
          <p>{instance.label}</p>
          <p>{instance.url}</p>
        </a>
      </li>
    );
  }
};

export default Instance;
