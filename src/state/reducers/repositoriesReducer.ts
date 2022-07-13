interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
