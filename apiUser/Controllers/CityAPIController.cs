using apiUser.Data;
using apiUser.Data.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace apiUser.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CityAPIController :  ControllerBase
    {
        private readonly UserDBContext _userDBContext;
        public CityAPIController(UserDBContext userDBContext)
        {
            _userDBContext = userDBContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var users = await _userDBContext.cities.ToListAsync();
            return Ok(users);
        }
        [HttpPost]
        public async Task<IActionResult> PostAsync(Cities city)
        {
            _userDBContext.cities.Add(city);
            await _userDBContext.SaveChangesAsync();
            return Created($"/Create City={city.Id}", city);
        }

        [HttpGet]
        [Route("get-city-by-id")]
        public async Task<IActionResult> GetCakeByIdAsync(int id)
        {
            var city = await _userDBContext.cities.FindAsync(id);
            return Ok(city);
        }
        [HttpPut]
        public async Task<IActionResult> PutAsync(Cities cityToUpdate)
        {
            _userDBContext.cities.Update(cityToUpdate);
            await _userDBContext.SaveChangesAsync();
            return NoContent();
        }

        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var cityToDelete = await _userDBContext.cities.FindAsync(id);
            if (cityToDelete == null)
            {
                return NotFound();
            }
            _userDBContext.cities.Remove(cityToDelete);
            await _userDBContext.SaveChangesAsync();
            return NoContent();
        }
    }
}
