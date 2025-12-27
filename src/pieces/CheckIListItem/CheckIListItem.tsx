import CheckIcon from "./../CheckIcon/CheckIcon";

interface IItemProps {
  label: string;
  iconWidth: number;
}

const CheckIListItem = ({ label, iconWidth }: IItemProps) => {
  return (
    <li className="my-1.5 flex flex-row items-center gap-2">
      <CheckIcon iconWidth={iconWidth} />
      <span className="text-white">{label}</span>
    </li>
  );
};

export default CheckIListItem;
