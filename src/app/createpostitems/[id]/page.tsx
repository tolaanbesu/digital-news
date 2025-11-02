// eslint-disable-next-line @typescript-eslint/no-explicit-any

import EditPostItem from '@/components/EditPostItem'

export default async function Page({ params }: any) {
  const { id } = params;

  return <EditPostItem id={id} />;
}
