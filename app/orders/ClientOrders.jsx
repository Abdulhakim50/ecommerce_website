'use client'
import React from 'react'
import { DataGrid } from "@mui/x-data-grid"
import Status from "@/components/Status"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import axios from "axios"
import moment from "moment"
import formatPrice from '@/utils/formatPrice'






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

                        <button type="button" onClick={() => router.push(`order/${params.row.id}`)}  >remove</button>
                    </div>
                )
            }
        }
    ]




    return (
        <div className="p-8 bg-green-100">
        <div className="mb-6">
        <p className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-700">
  Your Orders
</p>
        </div>
        <div className="w-full h-96 mb-6 bg-green-200">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                pageSizeOptions={[9, 20]}
                checkboxSelection
                disableRowSelectionOnClick
                components={{
                    Toolbar: () => (
                        <div className="bg-green-300 p-2 mb-4">
                            {/* You can add toolbar components here if needed */}
                        </div>
                    ),
                }}
                getRowId={(row) => row.id}
                rowsPerPageOptions={[5, 10, 20]}
            />
        </div>
    </div>
    )
}




export default ClientOrders