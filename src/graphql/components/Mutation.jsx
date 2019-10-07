import React from "react";
import { useMutation } from "@apollo/react-hooks";
import PropTypes from "prop-types";

const Mutation = ({ render, name, mutation, updateFn }) => {
  const [mutationFn] = useMutation(mutation, {
    update: updateFn
  });
  return <React.Fragment>{render({ [name]: mutationFn })}</React.Fragment>;
};

Mutation.propTypes = {
  render: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  updateFn: PropTypes.func.isRequired,
  mutation: PropTypes.object.isRequired
};

export default Mutation;
