export interface Item {
  label: string;
  icon: JSX.Element;
  active?: boolean;
}

const NavItems = ({ item }: { item: Item }) => {
  const { label, icon, active } = item;
  return (
    <li
      className={`flex p-2 justify-end items-center cursor-pointer${
        active ? " text-white bg-blue-800" : ""
      } `}
    >
      <h3 className="text-2xl mr-3">{label}</h3>
      {icon}
    </li>
  );
};

export default NavItems;
