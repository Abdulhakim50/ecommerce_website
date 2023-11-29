'use client'

import Status from '@/components/Status'
import React from 'react'
import { MdAccessTimeFilled, MdDone } from 'react-icons/Md'
import OrderItem from './OrderItem'
import moment from 'moment'

const OrderDetails = ({order}) => {

  
  return (
    <div>
    <div>OrderDetails</div>
    <div>Order ID :{order.id}</div>
    <div>Total Amount:{""}</div>
    <div>Payment Status</div>
    <div>
        {order.status==='pending'?<Status text="pending"  icon={<MdAccessTimeFilled/>}/>
        : order.status==='complate'?<Status text="compated" icon={<MdDone/>}/>
        :<></>
        }
    </div>
    <div>Delivery Status</div>
    <div>
        {order.deliveryStatus==='pending'?<Status text="pending" className=" bg-blue-400" icon={<MdAccessTimeFilled/>}/>
        : order.deliveryStatus==='dispatched'?<Status text="diapatched" className="bg-blue-700" icon={<MdDone/>}/>
        : order.deliveryStatus==='delivered'?<Status text="delivered" className="bg-green-400" icon={<MdDone/>}/>

        :<></>
        }
    </div>
    <div>Date:{moment(order.createDate).fromNow()}</div>
    <div><h2>Products ordered</h2>
    <div>
        <div>Product</div>
        <div>Price</div>
        <div>Qty</div>
        <div>Total amount</div>
    </div>
    {order.products && order.products.map((item)=>{
        return <OrderItem key={item.id} item={item}/>
    })}
    </div>
    </div>
  )
}

export default OrderDetails