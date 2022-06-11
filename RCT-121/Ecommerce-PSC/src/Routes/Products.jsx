import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllData } from "../Redux/actions";
import style from "../Components/app.module.css";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FilterComponent } from "../Components/FilterComponent";

export const Products = () => {
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state?.ecommerceStore.data);
  const loading = useSelector((state) => state?.ecommerceStore.loading);
  const error = useSelector((state) => state?.ecommerceStore.error);
  // const [sort, setSort] = useState("ASC");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData({ dispatch, page }));
  }, [page]);
  // console.log(data);

  return (
    <>
      <Box>
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
        <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
          <FilterComponent />
          {/* <div className={style.container}> */}
          <Box>
            <Heading>Characters</Heading>
            <Flex flexWrap="wrap" justifyContent="space-around">
              {data &&
                data?.map((d) => {
                  return (
                    <Box key={d.id}>
                      <Link
                        to={`/products/${d.id}`}
                        className={style.boxLink}
                        style={{ textDecoration: "none" }}
                      >
                        <Center py={12}>
                          <Box
                            role={"group"}
                            p={6}
                            maxW={"330px"}
                            w={"full"}
                            bg={useColorModeValue("white", "gray.800")}
                            boxShadow={"2xl"}
                            rounded={"lg"}
                            pos={"relative"}
                            zIndex={1}
                          >
                            <Box
                              rounded={"lg"}
                              mt={-12}
                              pos={"relative"}
                              height={"230px"}
                              _after={{
                                transition: "all .3s ease",
                                content: '""',
                                w: "full",
                                h: "full",
                                pos: "absolute",
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${d.image})`,
                                filter: "blur(15px)",
                                zIndex: -1,
                              }}
                              _groupHover={{
                                _after: {
                                  filter: "blur(20px)",
                                },
                              }}
                            >
                              <Image
                                rounded={"lg"}
                                height={230}
                                width={282}
                                objectFit={"cover"}
                                src={d.image}
                              />
                            </Box>
                            <Stack pt={10} align={"center"}>
                              <Text
                                color={"gray.500"}
                                fontSize={"sm"}
                                textTransform={"uppercase"}
                              >
                                Brand
                              </Text>
                              <Heading
                                fontSize={"2xl"}
                                fontFamily={"body"}
                                fontWeight={500}
                              >
                                {d.title}
                              </Heading>
                              <Stack direction={"row"} align={"center"}>
                                <Text fontWeight={800} fontSize={"xl"}>
                                  ${d.price}
                                </Text>
                                <Text
                                  textDecoration={"line-through"}
                                  color={"gray.600"}
                                >
                                  $19
                                </Text>
                              </Stack>
                            </Stack>
                          </Box>
                        </Center>
                      </Link>
                    </Box>
                  );
                })}
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Box>
        <div>
          <button
            disabled={page == 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
          <button onClick={() => setPage((prev) => prev + 1)}>next</button>
        </div>
        {/* </div> */}
      </Box>
    </>
  );
};
