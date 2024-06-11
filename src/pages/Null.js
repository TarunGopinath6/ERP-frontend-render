<Grid item lg={12} xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Quality Check
                    </Typography>
                    <Chart
                      options={departmentQualityCheckDataOptions}
                      series={departmentQualityCheckData.series}
                      type="bar"
                      // width="170%"
                      height="90%"
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item lg={12} xs={12} sx={{ p: 1 }}>
                <Paper
                  sx={{
                    p: 2,
                    pt: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Grid container xs={12}>
                    <Grid item xs={12} height="320px">
                      <DataGrid
                        rows={materialsOverheadData}
                        columns={materialsOverheadDataColumn}
                        onRowClick={() => {}}
                        initialState={{
                          pagination: {
                            paginationModel: {
                              pageSize: 5,
                            },
                          },
                        }}
                        pageSizeOptions={[5]}
                        slots={{ toolbar: materialsOverheadDataToolbar }}
                        sx={{
                          border: 0,
                          paddingTop: 1,
                          fontFamily: "Public Sans, sans-serif",
                          fontSize: "0.875rem",
                          "& .header-theme": {
                            // backgroundColor: "rgba(75, 170, 76, 0.2)",
                            backgroundColor: "rgb(244,246,248)",
                          },
                          "& .MuiDataGrid-toolbarContainer": {
                            // Your custom styles for the toolbar container
                            padding: "15px",
                            height: "250",
                          },
                        }}
                                // disableColumnMenu

                        density="compact"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>