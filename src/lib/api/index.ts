import { whatsappLink } from "../utils";
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

export const API_BASE_URL = "https://api.bmwdentalclinic.com/api/";
const BASE_URL = "https://api.bmwdentalclinic.com/api/" + "public";
const DEFAULT_REVALIDATE = 43200; // 12 hours
const DEFAULT_REVALIDATE_BLOGS = 14400; // 4 hours

export async function getDoctors({
  isHighlighted = false,
}: {
  isHighlighted?: boolean;
} = {}): Promise<BaseResponse<Doctor>> {
  try {
    const res = await fetcher<BaseResponse<Doctor>>(
      `${BASE_URL}/doctors?isHighlighted=${isHighlighted ? "true" : "false"}`,
      {
        next: { revalidate: DEFAULT_REVALIDATE },
        // cache: "no-store",
        // headers: {
        //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
        // },
      }
    );

    console.log("CEK DOKTER: ", res);
    return res;
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return {
      success: true,
      message: "Fallback doctors data",
      data: [],
    };
  }
}

export async function getFacilities({
  isHighlighted = false,
}: {
  isHighlighted?: boolean;
} = {}): Promise<BaseResponse<Facility>> {
  try {
    const res = await fetcher<BaseResponse<Facility>>(
      `${BASE_URL}/facilities?isHighlighted=${
        isHighlighted ? "true" : "false"
      }`,
      {
        next: { revalidate: DEFAULT_REVALIDATE },
        // cache: "no-store",
        // headers: {
        //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
        // },
      }
    );
    return res;
  } catch (error) {
    console.error("Failed to fetch facilities:", error);
    return {
      success: true,
      message: "Fallback facilities data",
      data: [],
    };
  }
}

export async function getServices(): Promise<BaseResponse<Service>> {
  try {
    const res = await fetcher<BaseResponse<Service>>(`${BASE_URL}/services`, {
      next: { revalidate: DEFAULT_REVALIDATE },
      // cache: "no-store",
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
      // },
    });
    return res;
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return {
      success: true,
      message: "Fallback services data",
      data: [],
    };
  }
}

export async function getServiceBySlug(
  slug: string
): Promise<BaseResponseDetail<Service>> {
  const res = await fetcher<BaseResponseDetail<Service>>(
    `${BASE_URL}/services/${slug}`,
    {
      next: { revalidate: DEFAULT_REVALIDATE },
      // cache: "no-store",
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
      // },
    }
  );

  return res;
}

export async function getBlogs(): Promise<BaseResponse<Post>> {
  const res = await fetcher<BaseResponse<Post>>(`${BASE_URL}/posts`, {
    next: { revalidate: DEFAULT_REVALIDATE_BLOGS },
    // cache: "no-store",
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
    // },
  });

  return res;
}

export async function getBlogsForSitemap(): Promise<BaseResponse<Post>> {
  try {
    const res = await fetcher<BaseResponse<Post>>(`${BASE_URL}/posts`, {
      next: { revalidate: DEFAULT_REVALIDATE_BLOGS },
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
      // },
    });
    return res;
  } catch (error) {
    console.error("Failed to fetch blogs for sitemap:", error);
    return {
      success: true,
      message: "Fallback blogs data",
      data: [],
    };
  }
}

export async function getSettings(): Promise<BaseResponseDetail<Setting>> {
  try {
    const res = await fetcher<BaseResponseDetail<Setting>>(
      `${BASE_URL}/settings`,
      {
        next: { revalidate: DEFAULT_REVALIDATE },
        // cache: "no-store",
        // headers: {
        //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
        // },
      }
    );
    return {
      ...res,
      data: {
        ...res.data,
        link_whatsapp: whatsappLink(
          res.data?.socials?.whatsapp || "6285282827258",
          res.data?.socials?.whatsappMessage ||
            "Hi Admin BMW, mau konsultasi untuk perawatan saya dan keluarga ya"
        ),
      },
    };
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    // Return fallback data during build failures
    return {
      success: true,
      message: "Fallback settings",
      data: {} as Setting,
    };
  }
}

export async function getBlogsBySlug(
  slug: string
): Promise<BaseResponseDetail<Post>> {
  const res = await fetcher<BaseResponseDetail<Post>>(
    `${BASE_URL}/posts/${slug}`,
    {
      next: { revalidate: DEFAULT_REVALIDATE_BLOGS },
      // cache: "no-store",
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Goq3DwXNNOPqtez1.drTTp0wfOa2qI12MNrTRUXFhQhFHEKV2KaplMOj1cGyC5oNnpYXs68ORc5_VEQSOVNNBydHrpRYvuTExqIV4zD2D_7PJTxcAjGkP9EpdN_jpBlx9vn4nVH1f-SivP65Ypv0xYeI-RLgh5APzp2RGxsoLUpvUD_p_Au2eHmIKTGeu2JC1PZ-RCfYJainNWO-VmDGni9MMJE9g4ut5SjJBhqRUwxzyqY0h83hNlsHfWrEw5ECk.hB7Eza35UwgtbLaRm0LI1g`,
      // },
    }
  );

  return res;
}
