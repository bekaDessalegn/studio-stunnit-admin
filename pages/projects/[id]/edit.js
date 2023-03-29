import Navbar from '../../../components/navbar'
import EditProject from '../../../components/edit-project'
import apiUrl from '../../../config';
import LeftRightAligner from '../../../components/left-right-aligner';

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

export async function getStaticPaths() {
  const ids = [];

  try {
    let res = await fetch(`${apiUrl}/projects`);
    let projects = await res.json();
    const id = projects.map((project) => project.id)
    ids.push(...id)
  } catch (error) {
    console.error(error)
  }

  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  console.log(params)

  try {
    let headersList = {
      "Accept": "*/*",
    }

    let response = await fetch(`${apiUrl}/projects`, {
      method: "GET",
      headers: headersList
    });

    let data = await response.text();
    const projects = JSON.parse(data);
    const project = projects.find(function (project) {
      return project.id.toString() === params.id;
    })

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

