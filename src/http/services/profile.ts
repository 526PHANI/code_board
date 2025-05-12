export const getProfileAPI = async (id: string) => {
  try {
    const res = await fetch(`http://192.168.1.36:3000/v1.0/user/${id}`);
    if (!res.ok) throw new Error('Failed to fetch user');
    return res.json();
  } catch (error) {
    throw error;
  }
};