import { fetcher } from "../utils/fetcher";

type BaseResponse<T> = {
  success: boolean;
  data: T[];
};
const BASE_URL = process.env.BASE_URL + "api/public";
export async function getDoctors(): Promise<Doctor[]> {
  const res = await fetcher<BaseResponse<Doctor>>(`${BASE_URL}/doctors`, {
    next: { revalidate: 300 },
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res.data;
}

export async function getFacilities(): Promise<FacilityResponse> {
  const res = await fetcher<FacilityResponse>(`${BASE_URL}/facilities`, {
    next: { revalidate: 300 },
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res;
}

export async function getServices(): Promise<ServiceResponse> {
  const res = await fetcher<ServiceResponse>(`${BASE_URL}/services`, {
    next: { revalidate: 300 },
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res;
}

export async function getBlogs(): Promise<Blog[]> {
  const res = await fetcher<BaseResponse<Blog>>(`${BASE_URL}/posts`, {
    next: { revalidate: 300 },
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res.data;
}
