'use client'

import Status from '@/components/Status'
import React from 'react'
import { MdDone } from 'react-icons/md '
import { MdAccessTimeFilled  } from 'react-icons/md/MdAccessTimeFilled'
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
        {order.status==='pending'?<Status text="pending"  icon='time'/>
        : order.status==='complate'?<Status text="compated" icon='done'/>
        :<></>
        }
    </div>
    <div>Delivery Status</div>
    <div>
        {order.deliveryStatus==='pending'?<Status text="pending" className=" bg-blue-400" icon='filed'/>
        : order.deliveryStatus==='dispatched'?<Status text="diapatched" className="bg-blue-700" icon='done'/>
        : order.deliveryStatus==='delivered'?<Status text="delivered" className="bg-green-400" icon='done'/>

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