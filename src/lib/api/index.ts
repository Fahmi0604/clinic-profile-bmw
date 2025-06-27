import { fetcher } from "../utils/fetcher";

type BaseResponseDetail<T> = {
  success: boolean;
  message: string;
  data: T;
};
type BaseResponse<T> = {
  success: boolean;
  message: string;
  data: T[];
};

export const API_BASE_URL = "https://api.cms.ts-exp.com/api/";
const BASE_URL = "https://api.cms.ts-exp.com/api/" + "public";
export async function getDoctors(): Promise<BaseResponse<Doctor>> {
  const res = await fetcher<BaseResponse<Doctor>>(`${BASE_URL}/doctors`, {
    cache: "no-store",
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  console.log("CEK DOKTER: ", res);

  return res;
}

export async function getFacilities(): Promise<BaseResponse<Facility>> {
  const res = await fetcher<BaseResponse<Facility>>(`${BASE_URL}/facilities`, {
    cache: "no-store",
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res;
}

export async function getServices(): Promise<BaseResponse<Service>> {
  const res = await fetcher<BaseResponse<Service>>(`${BASE_URL}/services`, {
    cache: "no-store",
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res;
}

export async function getServiceBySlug(
  slug: string
): Promise<BaseResponseDetail<Service>> {
  const res = await fetcher<BaseResponseDetail<Service>>(
    `${BASE_URL}/services/${slug}`,
    {
      cache: "no-store",
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
      // },
    }
  );

  return res;
}

export async function getBlogs(): Promise<BaseResponse<Post>> {
  const res = await fetcher<BaseResponse<Post>>(`${BASE_URL}/posts`, {
    cache: "no-store",
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res;
}

export async function getSettings(): Promise<BaseResponseDetail<Setting>> {
  const res = await fetcher<BaseResponseDetail<Setting>>(
    `${BASE_URL}/settings`,
    {
      cache: "no-store",
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
      // },
    }
  );

  return res;
}

export async function getBlogsBySlug(
  slug: string
): Promise<BaseResponseDetail<Post>> {
  const res = await fetcher<BaseResponseDetail<Post>>(
    `${BASE_URL}/posts/${slug}`,
    {
      cache: "no-store",
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
      // },
    }
  );

  return res;
}
