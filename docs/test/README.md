# Тестування працездатності системи

*В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування.*

## GET /projects
 ![](./Images/get_projects.png)

## GET /project/\<id\>
 ![](./Images/get_project_id.png)

## GET /project/\<id\> Error report
 ![](./Images/get_project_id_Invalid_project_id.png)

## GET /project/\<id\> Error report
 ![](./Images/get_project_id_no_project_with_such_id.png)

## GET /users
 ![](./Images/get_users.png)

## GET /user/\<id\>
 ![](./Images/get_user_id.png)

## GET /user/login/\<Login\>
 ![](./Images/get_user_login.png)

## GET /user/\<id\>	  Error report
 ![](./Images/get_user_id_no_user_with_such_id.png)

## GET /user/\<id\>	  Error report
 ![](./Images/get_user_id_invalid_user_id.png)

## GET /user/login/\<Login\>	Error report
 ![](./Images/get_user_login_no_user_with_such_login.png)

## POST /project/add
 ![](./Images/add_project.png)
 ![](./Images/project_add_test.png)

## POST /user/add
 ![](./Images/user_add.png)
 ![](./Images/user_add_test.png)

## POST /user/add	Error report
 ![](./Images/user_add_invalid_amount_of_keys.png)

## POST /user/add	Error report
 ![](./Images/user_add_invalid_role.png)

## POST /user/add	Error report
 ![](./Images/user_add_conflict.png)

## PUT /project/update
 ![](./Images/project_update.png)
 ![](./Images/project_update_test.png)

## PUT /project/update   Error report
 ![](./Images/project_update_nothing_to_update.png)

## PUT /project/update   Error report
 ![](./Images/project_update_invalid_amount_of_keys.png)

## PUT /project/update   Error report
 ![](./Images/project_update_invalid_project_id.png)

## PUT /user/update
 ![](./Images/user_update.png)
 ![](./Images/user_update_test.png)

## PUT /user/update   Error report
 ![](./Images/user_update_invalid_user_id.png)

## PUT /user/update   Error report
 ![](./Images/user_update_invalid_amount_of_keys.png)

## PUT /user/update   Error report
 ![](./Images/user_update_nothing_to_update.png)

## PUT /user/update   Error report
 ![](./Images/user_update_conflict.png)

## DELETE /project/delete/\<id\>
 ![](./Images/project_delete_id.png)
 ![](./Images/project_delete_id_test.png)

## DELETE /project/delete/\<id\>   Error report
 ![](./Images/project_delete_id_nothing_to_delete.png)

## DELETE /project/delete/\<id\>   Error report
 ![](./Images/project_delete_id_invalid_project_id.png)

## DELETE /user/delete/\<id\>
 ![](./Images/user_delete_id.png)
 ![](./Images/user_delete_id_test.png)

## DELETE /user/delete/\<id\>   Error report
 ![](./Images/user_delete_id_nothing_to_delete.png)

## DELETE /user/delete/\<id\>   Error report
 ![](./Images/user_delete_id_invalid_user_id.png)


