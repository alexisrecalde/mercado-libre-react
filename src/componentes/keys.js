export const keys = {
  public:
    "pk_test_51Lb6M3Ax57dZOCglQxO1aYofdKcXw1BsbrkX5aRMrDEoGmFbEL6LhKuR6WyOtIx66PR98LGWjBUT8pqOAMvvqcNl00iFeSWjE1",
  secret:
    "sk_test_51Lb6M3Ax57dZOCglFiuFXrRLTrtcPj1lgVQVjdpNatCpfh0A62B7VdiGmje9YO6s2FStcVQbFMlMDbeejTiCUl3q004vTXfubK",
};

export const fetchOptions = {
  headers: {
    Authorization: `Bearer ${keys.secret}`,
  },
};
