import EditPostItem from '@/components/EditPostItem'


export default async function Page({ params }: { params: { id: string } }) {
  const {id} = await params;

  return <EditPostItem id={id} />; 
}

