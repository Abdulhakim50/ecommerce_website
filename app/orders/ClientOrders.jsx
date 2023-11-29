'use client'
import React from 'react'
import { DataGrid } from "@mui/x-data-grid"
import Status from "@/components/Status"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import axios from "axios"
import moment from "moment"
import formatPrice from '@/utils/formatPrice'
import { MdRemoveRedEye } from 'react-icons/md/MdRemoveRedEye'





const ClientOrders = ({ orders }) => {

    const router = useRouter()



    let rows = [];
    if (orders) {
        rows = orders.map((order) => {
            return {
                id: order.id,
                customer: order.user.name,
                amount: formatPrice(order.amount / 100),
                paymentStatus:order.status,
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
                    <div>

                        <button type="button" onClick={() => router.push(`order/${params.row.id}`)}  ><MdRemoveRedEye /></button>
                    </div>
                )
            }
        }
    ]




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




export default ClientOrders