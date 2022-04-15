import UsersService from '../services/users.service';
import { Logger } from '../../lib';
import { constants } from '../../config';

const {
  Errors: { SOMETHING_WENT_WRONG },
  statusCodes,
} = constants;

class UsersController {
  private userService: UsersService;
  constructor(userService) {
    this.userService = userService;
  }
  public getMe = async (req, res, next) => {
    try {
      const rows = await this.userService.getMe();
      return res.status(statusCodes.OK).json(rows);
    } catch (err) {
      Logger.error(err);
      await next(SOMETHING_WENT_WRONG);
    }
  };
}

export default UsersController;
