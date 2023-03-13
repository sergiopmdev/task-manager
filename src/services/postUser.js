async function postUser(user, setState) {
  /**
   * Create user in database and update
   * state with status code of request
   */

  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  setState(undefined);

  await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, postOptions).then(
    (response) => {
      return setState(response.status);
    }
  );
}

export default postUser;
