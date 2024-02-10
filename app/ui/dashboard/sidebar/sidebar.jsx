import style from "./sidebar.module.css"
import menuItems from "./menuItems"
import MenuLink from "./menuLink/menuLink"
import Image from "next/image"
import { MdLogout } from "react-icons/md"
import { auth, signOut } from "@/app/auth"

const Sidebar = async () => {
  const {user} = await auth()
    return (
      <div className={style.container}>
        <div className={style.user}>
          <Image src={user.img || "/noavatar.png"} alt="" width="50" height="50"/>
          <div className={style.userDetail}>
            <span className={style.username}>{user.username}</span>
            <span className={style.userTitle}>Admin</span>
          </div>
        </div>
      <ul>
      {menuItems.map((cat) => (
        <li className={style.list} key={cat.title}>
          <span className={style.cat}>{cat.title}</span>
          {cat.list.map(item=>(
            <MenuLink item={item} key={item.title}/>
          ))}
        </li>
      ))}
      </ul>
      <form action={async ()=> {
        "use server";
        await signOut();
      }}>
        <button className={style.logout}>
          <MdLogout/>
          Logout
        </button>
      </form>
      </div>
    )
  }
  
  export default Sidebar