import { NavLink } from "react-router-dom";
import { TSideBarItems, TUserPath } from "../types";


export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSideBarItems[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.name && item.children) {
      acc.push({
        key: item.name,
        label: item.name,

        children: item.children.map((child) => {
          return {
            key: child.name,
            label: (
              <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
            ),
          };
        }),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
