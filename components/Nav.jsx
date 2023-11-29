import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/Ai'
import { MdOutlineManageAccounts } from 'react-icons/Md'
import Link from 'next/link'
import { FiMenu } from 'react-icons/Fi'
import Button from './Button'
import  {getCurrentUser}  from '@/actions/getCurrentUser'
import ShowCartQty from './ShowCartQty'


const Nav = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="flex justify-around mt-5 items-center  ">


      <div className="flex gap-2 text-center ">
        <div className="drawer md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button menubtn"><FiMenu /></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>

            </ul>
          </div>
        </div>

        <p className=" text-2xl "><span className=" text-green-700 font-black">Ethiomarket.</span>com</p>
      </div>
      <div className="flex items-center">
        <input type="text" className=" border border-green-400 w-[600px] h-12 border-sm  max-md:hidden" />
        <AiOutlineSearch className=" bg-green-700 w-20 h-12 text-white text-sm rounded-sm " />
      </div>
      <div className="flex gap-5">
        <div className=" items-center">
          <ShowCartQty />

          <p className="text-xs text-center">Cart</p>
        </div>
        <div className="dropdown dropdown-hover dropdown-down">
          <MdOutlineManageAccounts className="w-10 h-6" />
          <p tabIndex="0" className="text-xs text-center">Account</p>
          <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-42">
            {currentUser ?<> <Button /> <li ><Link href="/orders">View Orders</Link></li> </> :
                
              <>
             
                <li ><Link href="/login">Signin</Link></li>
                <li ><Link href="/register">Register</Link></li>

              </>
            }

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav