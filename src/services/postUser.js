function postUser(user, setLoading, setState) {
  /**
   * Create user in database and update
   * state with status code of request
   */

  setLoading(true);

  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, postOptions).then(
    (response) => {
      if (response.status != 201) {
        setLoading(false);
      }
      return setState(response.status);
    }
  );
}

export default postUser;
