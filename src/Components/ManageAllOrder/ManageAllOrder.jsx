import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://infinite-oasis-45429.herokuapp.com/order?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => setOrders(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`https://infinite-oasis-45429.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
          alert("data delete successfully");
        } else {
          setControl(false);
        }
      });
  };
  return (
    <div className="col-lg-6 col-md-6">
      <h2>Manage Order: {orders.length} Orders</h2>

      {orders.map((order) => (
        <Table className="table table-responsibe" key={order._id}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>desci</th>
              <th>photo url</th>
              <th>price</th>
              <th>Date</th>
              <th>state</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order._id}</td>
              <td>{order.name}</td>
              <td>{order.description}</td>
              <td>{order.photoUrl}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn bg-danger p-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default ManageAllOrder;
