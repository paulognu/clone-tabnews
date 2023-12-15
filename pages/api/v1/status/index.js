function status(request, response) {
  response.status(200).json({
    status: "são acima da média",
  });
}

export default status;
