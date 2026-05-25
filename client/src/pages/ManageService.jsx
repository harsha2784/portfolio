import AddService from "../components/AddService";

import Services from "../components/Services";

function ManageService() {

  return (

    <div className="max-w-7xl mx-auto px-6 py-20">

      <AddService />

      <Services manage={true} />

    </div>
  );
}

export default ManageService;