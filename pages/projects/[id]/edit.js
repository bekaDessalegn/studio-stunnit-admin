import EditProject from '../../../components/edit-project';
import LeftRightAligner from '../../../components/left-right-aligner';
import Navbar from '../../../components/navbar';
import apiUrl from '../../../config';

export default function editProject({ project }) {
  return <>
    <main className='' >
      <Navbar />
      <LeftRightAligner>
        <div className='h-14'></div>
        <EditProject project={project} />
        <div className='h-14'></div>
      </LeftRightAligner>
    </main>
  </>
}

export async function getServerSideProps({ params }) {

  let id = params.id
  try {
    let headersList = {
      "Accept": "*/*",
    }

    let response = await fetch(`${apiUrl}/projects?id=${id}`, {
      method: "GET",
      headers: headersList
    });

    let data = await response.text();
    const project = JSON.parse(data);

    return {
      props: {
        project: project,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        projects: [],
        error: error
      }
    };
  }
}

