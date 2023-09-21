function Barra({ search, doSearch }) {
  return (
    <nav>
      <div className="container-fluid">
        <input
          value={search}
          onChange={(event) => {
            doSearch(event.target.value);
          }}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
}

export default Barra;
