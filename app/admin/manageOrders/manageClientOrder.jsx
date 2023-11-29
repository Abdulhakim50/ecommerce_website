'use client'


import { DataGrid } from "@mui/x-data-grid"
import Status from "@/components/Status"
import toast from "react-hot-toast"
import axios from "axios"
import moment from "moment"
import { getStorage } from "firebase/storage"
import { useRouter } from "next/navigation"
import firebaseApp from "@/libs/firebase"
import formatPrice from "@/utils/formatPrice"
import { useCallback } from "react"
import {  MdRemoveRedEye } from "react-icons/md/MdRemoveRedEye"
import { MdDeliveryDining } from "react-icons/md/MdDeliveryDining"
import { MdDone } from "react-icons/md/MdDone"


const ManageClientOrders = ({ orders }) => {

    const router = useRouter()



    let rows = [];
    if (orders) {
        rows = orders.map((order) => {
            return {
                id: order.id,
                customer: order.user.name,
                amount: formatPrice(order.amount / 100),
                paymentStatus: order.status,
                date: moment(order.createDate),
                deliveryStatus: order.deliveryStatus,


            }
        })
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'customer', headerName: 'Custome Name', width: 130 },
        {
            field: 'amount', headerName: 'Amount(USD)', width: 130,
            renderCell: (params) => {
                return (
                    <div className="font-bold">{params.row.amount}</div>
                )
            }
        },
        {
            field: 'paymentStatus', headerName: 'Payment Status', width: 130,
            renderCell: (params) => {
                return (
                    <div className="font-bold">
                        {params.row.paymentStatus === 'pending' ? (<Status text="pending" />) : params.row.paymentStatus === 'complate' ? (<Status text="completed" />) : ''}
                    </div>
                )
            }
        },
        {
            field: 'deliveryStatus', headerName: 'Delivery Status', width: 220,
            renderCell: (params) => {
                return (
                    <div className="font-bold">
                        {params.row.deliveryStatus === 'pending' ? (<Status text="pending" />
                        ) : params.row.deliveryStatus === 'dispatched'? (<Status text="dispatched" />
                        ):params.row.deliveryStatus === 'delivered'? 
                        (<Status text="delivered" />): <></> }
                    </div>
                )
            }
        },

        {
            field: 'date',
            headerName: "Date",
            width: 130,
        },
        {
            field: 'actions', headerName: 'Actions', width: 100,
            renderCell: (params) => {
                return (
                    <div className="gap-6">
                        <button type="button" onClick={()=>{handleDispatch(params.row.id)}}><MdDeliveryDining/></button>
                        <button type="button" onClick={()=>{handleDeliver(params.row.id)}}><MdDone/></button>
                        <button type="button" onClick={() => router.push(`/order/${params.row.id}`)}  ><MdRemoveRedEye/></button>
                    </div>
                )
            }
        }
    ]

    const handleDispatch = useCallback(
        (id) => {
            axios.put('/api/order', {
                id,
                deliveryStatus: 'dispatched'
            }).then((res) => {
                toast.success('order Dispatched')
                router.refresh()

            }).catch((err) => {
                toast.error('Oops! someting wen wrong')
                console.log(err)
            })
        },
        []);
    

    const handleDeliver = useCallback(
        (id) => {
            axios.put('/api/order', {
                id,
                deliveryStatus: 'delivered'
            }).then((res) => {
                toast.success('order dilivered')
                router.refresh()
            }).catch((err) => {
                toast.error('Oops! someting wen wrong')
                console.log(err)
            })
        },
        [])
   



    return (
        <div>

            <div>
                <p>manageOrder</p>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },

                    },
                }}
                pageSizeOptions={[9, 20]}
                checkboxSelection
                disableRowSelectionOnClick

            />
        </div>

    )
}

export default ManageClientOrders