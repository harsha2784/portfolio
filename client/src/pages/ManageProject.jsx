import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";

function ManageProject() {
  return (
    <div className="bg-black min-h-screen text-white p-10">
      <AddProject />

      <div className="mt-20">
        <ProjectList manage={true} />
      </div>
    </div>
  );
}

export default ManageProject;