export const setError = (error) => ({
  type: "SET_ERROR",
  error,
});

export const setSuccess = (success) => ({
  type: "SET_SUCCESS",
  success,
});

export const startLoading = () => ({
  type: "START_LOADING",
});

export const stopLoading = () => ({
  type: "STOP_LOADING",
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  theme,
});

export const updateSite = (update) => ({
  type: "UPDATE_SITE",
  update,
});
