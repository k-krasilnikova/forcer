import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Clients from "../components";
import { getClientsRequest } from "../actions";
import { createPendingSelector } from "api/selectors";
import { CLIENTS_FORM } from "../../../constants";

const ClientsContainer = () => {
  const dispatch = useDispatch();
  const isGetClientsPending = useSelector(
    createPendingSelector(getClientsRequest)
  );

  const handleSubmit = useCallback(
    data => {
      dispatch(getClientsRequest(data));
    },
    [dispatch]
  );

  return (
    <Clients
      form={CLIENTS_FORM}
      isPending={isGetClientsPending}
      onSubmit={handleSubmit}
    />
  );
};

export default ClientsContainer;
