import PropTypes from 'prop-types';
import s from './friends.module.css';
export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={`${s.status} ${isOnline ? s.online : s.notOnline}`}
      ></span>
      <img className={s.image} src={avatar} alt={name} width="48" />
      <p className={s.text}>{name}</p>
    </>
  );
}
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
