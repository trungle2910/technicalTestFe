import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { leadsActions } from "../redux/actions/leads.actions";
import AddMark from "./AddMark";

const LeadsTable = () => {
  const dispatch = useDispatch();
  const leadsData = useSelector((state) => state.leads.leads);
  const loading = useSelector((state) => state.leads.loading);

  useEffect(() => {
    const getAllLeads = () => {
      dispatch(leadsActions.getAllLeads());
    };
    getAllLeads();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Num</th>
              <th>Location Type</th>
              <th>Location String</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leadsData?.map((lead) => {
              return (
                <tr key={lead._id}>
                  <td>
                    {lead.first_name} {lead.last_name}
                  </td>
                  <td>{lead.email}</td>
                  <td>{lead.mobile}</td>
                  <td>{lead.location_type}</td>
                  <td>{lead.location_string}</td>
                  <td>
                    <span>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          dispatch(leadsActions.deleteLead(lead._id));
                        }}
                      >
                        Delete
                      </Button>
                      <AddMark id={lead._id} />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};
export default LeadsTable;
